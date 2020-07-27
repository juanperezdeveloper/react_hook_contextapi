import React, { Fragment, useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useHistory, Link } from 'react-router-dom'

export const EditEmployee = (route) => {
  let history = useHistory()
  const { employees, editEmployee } = useContext(GlobalContext)
  const [selectedUser, setSelectedUser] = useState({ id: null, name: '', designation: '', location: '' })
  const currentUserId = route.match.params.id

  useEffect(() => {
    const employeeId = currentUserId
    const selectedUser = employees.find(emp => emp.id === parseInt(employeeId))
    setSelectedUser(selectedUser)
    // eslint-disable-next-line
  }, [])
}