import React, { createContext, useState, useEffect } from 'react'

// create context
// eslint-disable-next-line react-refresh/only-export-components
export const CategoryContext = createContext()
// import images
import Ambientadores from '../assets/img/Category/Ambientadores - 2.png'
import PapelHigienico from '../assets/img/Category/Papel Higiénico - 2.png'
import Detergentes from '../assets/img/Category/Detergentes - 2.png'
import Insecticidas from '../assets/img/Category/Insecticidas - 2.png'
import Suavizantes from '../assets/img/Category/Suavizantes - 2.png'
import Jabones from '../assets/img/Category/Jabones - 2.png'
import Desinfectantes from '../assets/img/Category/Desinfectantes - 2.png'
import Bolsas from '../assets/img/Category/Bolsas - 2.png'

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categories, setCategories] = useState([])
    
  useEffect(() => {
    // Datos estáticos simulando productos
    const staticCategories = [
      {
        id: 1,
        name: 'Ambientadores',
        image: Ambientadores,
      },
      {
        id: 2,
        name: 'Papel Higiénico',
        image: PapelHigienico,
      },
      {
        id: 3,
        name: 'Detergentes',
        image: Detergentes,
      },
      {
        id: 4,
        name: 'Insecticidas',
        image: Insecticidas,
      },
      {
        id: 5,
        name: 'Suavizantes',
        image: Suavizantes,
      },
      {
        id: 6,
        name: 'Jabones',
        image: Jabones,
      },
      {
        id: 7,
        name: 'Desinfectantes',
        image: Desinfectantes,
      },
      {
        id: 8,
        name: 'Bolsas',
        image: Bolsas,
      },
    ]

    setCategories(staticCategories)
  }, [])

  return (
    <CategoryContext.Provider value={{ categories, selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider
