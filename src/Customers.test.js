import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Customers from './Customers';


it ('should exist', async  () => { 
    let  { getByText} = render(<Customers />)
   await  expect(getByText).not.toBeNull()
})



it ('shold display entered test',  () => { 
    let { queryByLabelText } = render(<Customers />)
    expect(queryByLabelText('Enter Info')).toBeInTheDocument()
})

it ('shold display entered test',  () => { 
   let { queryByLabelText, queryByText} = render(<Customers />)
   let entry = 'cool entry'
   fireEvent.change(queryByLabelText('Enter Info'), { target: { value:  entry } })
   expect(queryByLabelText('Enter Info').value).toBe(entry)
   fireEvent.click(queryByText('A'))
   expect(queryByLabelText ('Display').value).toContain('Enter customer number')
})









