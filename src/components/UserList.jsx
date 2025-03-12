import React, { useState, useMemo, useEffect } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';

const UserList = ({ users }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
    const [filterCity, setFilterCity] = useState('');
    const [filterCompany, setFilterCompany] = useState('');
    const usersPerPage = 10;

    // Reset current page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filterCity, filterCompany]);

    // Extract unique cities and companies from the users list
    const uniqueCities = useMemo(() => {
        return [...new Set(users.map(user => user.address?.city).filter(Boolean))];
    }, [users]);

    const uniqueCompanies = useMemo(() => {
        return [...new Set(users.map(user => user.company?.name).filter(Boolean))];
    }, [users]);

    // Filter users based on the selected city and company
    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            if (filterCity && user.address?.city !== filterCity) return false;
            if (filterCompany && user.company?.name !== filterCompany) return false;
            return true;
        });
    }, [users, filterCity, filterCompany]);

    // Memoized sorting of filtered users based on sortConfig
    const sortedUsers = useMemo(() => {
        let sortableUsers = [...filteredUsers];
        if (sortConfig.key) {
            sortableUsers.sort((a, b) => {
                let aValue, bValue;
                // Handle nested properties for company and city
                if (sortConfig.key === 'company') {
                    aValue = a.company?.name || '';
                    bValue = b.company?.name || '';
                } else if (sortConfig.key === 'city') {
                    aValue = a.address?.city || '';
                    bValue = b.address?.city || '';
                } else {
                    aValue = a[sortConfig.key] || '';
                    bValue = b[sortConfig.key] || '';
                }

                // Convert string values to lowercase for case-insensitive comparison
                if (typeof aValue === 'string') aValue = aValue.toLowerCase();
                if (typeof bValue === 'string') bValue = bValue.toLowerCase();

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortableUsers;
    }, [filteredUsers, sortConfig]);

    // Calculate indices for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Toggle sort configuration when a header is clicked
    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    // Helper function to display a sort indicator
    const getSortIndicator = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
        }
        return '';
    };

    // Generate pagination items
    const paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => handlePageChange(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div className="mt-5">
            {/* Filter Controls */}
            <Form inline className="mb-3">
                <Form.Group className="mr-3">
                    <Form.Label className="mr-2">Filter by City:</Form.Label>
                    <Form.Control
                        as="select"
                        value={filterCity}
                        onChange={(e) => setFilterCity(e.target.value)}
                    >
                        <option value="">All</option>
                        {uniqueCities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mr-2">Filter by Company:</Form.Label>
                    <Form.Control
                        as="select"
                        value={filterCompany}
                        onChange={(e) => setFilterCompany(e.target.value)}
                    >
                        <option value="">All</option>
                        {uniqueCompanies.map((company) => (
                            <option key={company} value={company}>
                                {company}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>

            <Table className="user-table">
                <thead>
                    <tr className="size" style={{ textAlign: 'left' }}>
                        <th onClick={() => requestSort('id')} style={{ cursor: 'pointer' }}>
                            ID{getSortIndicator('id')}
                        </th>
                        <th onClick={() => requestSort('name')} style={{ cursor: 'pointer' }}>
                            Name{getSortIndicator('name')}
                        </th>
                        <th onClick={() => requestSort('email')} style={{ cursor: 'pointer' }}>
                            Email{getSortIndicator('email')}
                        </th>
                        <th onClick={() => requestSort('phone')} style={{ cursor: 'pointer' }}>
                            Phone No.{getSortIndicator('phone')}
                        </th>
                        <th onClick={() => requestSort('company')} style={{ cursor: 'pointer' }}>
                            Company{getSortIndicator('company')}
                        </th>
                        <th onClick={() => requestSort('city')} style={{ cursor: 'pointer' }}>
                            City{getSortIndicator('city')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user) => (
                        <tr className="size" key={user.id}>
                            <td>{user.id || 'N/A'}</td>
                            <td>{user.name || 'N/A'}</td>
                            <td>{user.email || 'N/A'}</td>
                            <td>{user.phone || 'N/A'}</td>
                            <td>{user.company?.name || 'N/A'}</td>
                            <td>{user.address?.city || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination>
                <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                {paginationItems}
                <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </Pagination>
        </div>
    );
};

export default UserList;
