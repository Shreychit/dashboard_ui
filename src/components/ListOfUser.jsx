import React, { useState, useEffect } from "react";
import UserList from './UserList';

// Dummy data: Array of 20 users for testing pagination (10 per page)
const dummyData = [
    { id: 1, name: "User 1", email: "user1@example.com", phone: "123-456-7890", company: { name: "Company A" }, address: { city: "City A" }, website: "www.user1.com", status: "Active" },
    { id: 2, name: "User 2", email: "user2@example.com", phone: "234-567-8901", company: { name: "Company B" }, address: { city: "City B" }, website: "www.user2.com", status: "Inactive" },
    { id: 3, name: "User 3", email: "user3@example.com", phone: "345-678-9012", company: { name: "Company C" }, address: { city: "City C" }, website: "www.user3.com", status: "Active" },
    { id: 4, name: "User 4", email: "user4@example.com", phone: "456-789-0123", company: { name: "Company D" }, address: { city: "City D" }, website: "www.user4.com", status: "Active" },
    { id: 5, name: "User 5", email: "user5@example.com", phone: "567-890-1234", company: { name: "Company E" }, address: { city: "City E" }, website: "www.user5.com", status: "Inactive" },
    { id: 6, name: "User 6", email: "user6@example.com", phone: "678-901-2345", company: { name: "Company F" }, address: { city: "City F" }, website: "www.user6.com", status: "Active" },
    { id: 7, name: "User 7", email: "user7@example.com", phone: "789-012-3456", company: { name: "Company G" }, address: { city: "City G" }, website: "www.user7.com", status: "Active" },
    { id: 8, name: "User 8", email: "user8@example.com", phone: "890-123-4567", company: { name: "Company H" }, address: { city: "City H" }, website: "www.user8.com", status: "Inactive" },
    { id: 9, name: "User 9", email: "user9@example.com", phone: "901-234-5678", company: { name: "Company I" }, address: { city: "City I" }, website: "www.user9.com", status: "Active" },
    { id: 10, name: "User 10", email: "user10@example.com", phone: "012-345-6789", company: { name: "Company J" }, address: { city: "City J" }, website: "www.user10.com", status: "Active" },
    { id: 11, name: "User 11", email: "user11@example.com", phone: "123-456-7891", company: { name: "Company K" }, address: { city: "City K" }, website: "www.user11.com", status: "Inactive" },
    { id: 12, name: "User 12", email: "user12@example.com", phone: "234-567-8902", company: { name: "Company L" }, address: { city: "City L" }, website: "www.user12.com", status: "Active" },
    { id: 13, name: "User 13", email: "user13@example.com", phone: "345-678-9013", company: { name: "Company M" }, address: { city: "City M" }, website: "www.user13.com", status: "Active" },
    { id: 14, name: "User 14", email: "user14@example.com", phone: "456-789-0124", company: { name: "Company N" }, address: { city: "City N" }, website: "www.user14.com", status: "Inactive" },
    { id: 15, name: "User 15", email: "user15@example.com", phone: "567-890-1235", company: { name: "Company O" }, address: { city: "City O" }, website: "www.user15.com", status: "Active" },
    { id: 16, name: "User 16", email: "user16@example.com", phone: "678-901-2346", company: { name: "Company P" }, address: { city: "City P" }, website: "www.user16.com", status: "Active" },
    { id: 17, name: "User 17", email: "user17@example.com", phone: "789-012-3457", company: { name: "Company Q" }, address: { city: "City Q" }, website: "www.user17.com", status: "Inactive" },
    { id: 18, name: "User 18", email: "user18@example.com", phone: "890-123-4568", company: { name: "Company R" }, address: { city: "City R" }, website: "www.user18.com", status: "Active" },
    { id: 19, name: "User 19", email: "user19@example.com", phone: "901-234-5679", company: { name: "Company S" }, address: { city: "City S" }, website: "www.user19.com", status: "Active" },
    { id: 20, name: "User 20", email: "user20@example.com", phone: "012-345-6790", company: { name: "Company T" }, address: { city: "City T" }, website: "www.user20.com", status: "Inactive" }
];

const ListOfUser = () => {
    const [usersRecords, setUsersRecords] = useState([]);

    useEffect(() => {
        // Instead of fetching from an API, use the dummy data
        setUsersRecords(dummyData);
    }, []);

    console.log(usersRecords);

    return (
        <div>
            <UserList users={usersRecords} />
        </div>
    );
}

export default ListOfUser;
