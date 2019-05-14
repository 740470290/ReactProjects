import React, {Fragment} from 'react';
import {Input, Button, List, Typography} from 'antd';
import TodoItem from '../components/TodoItem';

const TodolistUI = (props) =>
  (<Fragment>
    <form
      action="#"
      style={{margin: '10px'}}
      onSubmit={(e) => { e.preventDefault(); }}
    >
      <Input
        placeholder="Basic usage"
        type="text"
        value={props.inputValue}
        onChange={(e) => props.handleChange(e)}
        style={{width: '300px', marginRight: '10px'}}
      />
      <Button
        type="primary"
        htmlType="submit"
        onClick={() => props.handleClick()}
      >
        submit
      </Button>
    </form>
    <List
      bordered
      dataSource={props.list}
      renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
      )}
    />
    <ul>
      {
        props.list.map((item, index) =>
          (<TodoItem
            item={item}
            index={index}
            key={index}
            handleDelete={props.handleDelete}
          />))
      }
    </ul>
  </Fragment>);

export default TodolistUI;
