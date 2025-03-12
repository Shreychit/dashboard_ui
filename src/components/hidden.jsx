import React from 'react'
import { Table } from 'react-bootstrap'

const UserList = () => {
    // const users = [
    //     {
    //       name: 'Yunus Aishat',
    //       designation: 'Front-End Developer',
    //       department: 'Software',
    //       email: 'aishaty@gmail.com',
    //       phone: '+234 90 868 111 78',
    //       status: 'Active',
    //       image: 'https://img.freepik.com/free-psd/young-woman-wearing-hijab-isolated_23-2151307008.jpg?uid=R101334815&ga=GA1.1.1756334039.1718352336&semt=ais_user-customized', 
    //     },
    //     {
    //         name: 'Samson Ajayi',
    //         designation: 'Backend Developer',
    //         department: 'Software',
    //         email: 'qjayi@gmail.com',
    //         phone: '+234 80 827 474 56',
    //         status: 'Active',
    //         image: 'https://img.freepik.com/free-photo/african-american-young-man-colorful-shirt-looking-camera-puzzled-standing-white_141793-109036.jpg?uid=R101334815&ga=GA1.1.1756334039.1718352336&semt=ais_user-customized', 
    //       }
    // ];
  return (
    <div className='mt-5'>
        <Table hover className='user-table'>
            <thead>
                <tr className='size' style={{ textAlign: "left"}}>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody> 
               {users.map((user, index) => (
                <tr className='size'>
                    <td>
                        <div className='user-info mt-4'>
                            <img src={user.image} alt={user.name} className='user-image' />
                            <div><b>{user.name}</b></div>
                        </div>
                        
                    </td>
                    <td>{user.designation}</td>
                    <td>{user.department}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td> <span className={`status-badge ${user.status.toLowerCase()}`}>
                    {user.status}
                    </span>
                        </td>
                </tr>
                
               ))}
            </tbody>
        </Table>
    </div>
  )
}

export default UserList