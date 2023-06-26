import React, { useEffect } from 'react'
import { useSession } from '../hooks/useSession'
import { useNavigate } from 'react-router-dom';

const UnProtectedRoute = ({children}) => {

  const { perfil } = useSession();
  const navigate = useNavigate();

  useEffect(()=>{
    if(perfil.id) return navigate("/redirect");
  },[])

  return (
    <>{children}</>
  )
}

export default UnProtectedRoute