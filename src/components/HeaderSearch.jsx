import React from 'react';
import { Button, Form, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import { BsMenuButtonWide } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";


const HeaderSearch = () => {
  return (
    <div className="table-header">
      <div className="button-group">
        <Button className="header-button active" style={{ backgroundColor: "#9e77d2" }}>
          <span><IoMdMenu /></span> List</Button>
        <Button className="header-button" style={{ backgroundColor: "#f3f4f7", color: "#000" }}>
          <span><BsMenuButtonWide /></span> Card</Button>
      </div>
      <Form inline className="header-form">
        <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
        <DropdownButton id="dropdown-basic-button" title="Select Department" className="mr-sm-2">
          <Dropdown.Item href="#/action-1">Software Enginer</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Web Developer</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Department 3</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Select Designation" className="mr-sm-2">
          <Dropdown.Item href="#/action-1">Designation 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Designation 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Designation 3</Dropdown.Item>
        </DropdownButton>
      </Form>
    </div>
  );
};

export default HeaderSearch;
