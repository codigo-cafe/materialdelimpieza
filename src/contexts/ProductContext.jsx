import React, { createContext, useState, useEffect } from 'react'

// create context
// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [ products, setProducts ] = useState([])
  
  useEffect(() => {
    // Datos estáticos simulando productos
    const staticProducts = [
      //CATEGORÍA AMBIENTADORES
      {
        id: 1,
        title: 'Sapolio Aroma Lavanda X 360Ml',
        price: 21,
        description: 'Sapolio aroma lavanda x 360ml',
        category: 'Ambientadores',
        image: 'https://amarket.com.bo/cdn/shop/files/8309800_670x670.jpg?v=1712344482',
      },
      {
        id: 2,
        title: 'Todo Brillo Pastillas D/Baño X 40Gr Lavanda',
        price: 7,
        description: '40gr Lavanda',
        category: 'Ambientadores',
        image: 'https://amarket.com.bo/cdn/shop/files/7774904403085_670x670.jpg?v=1712346320',
      },
      {
        id: 3,
        title: 'Pato Bloque Adhesivo Para Baños Citrus X 3 Unidades',
        price: 23.80,
        description: 'Pato Bloque Adhesivo Para Banos Citrus X 3 Unidades',
        category: 'Ambientadores',
        image: 'https://amarket.com.bo/cdn/shop/files/7790520005939_670x670.jpg?v=1712345661',
      },
      {
        id: 4,
        title: 'Ambientador Bristar Aerosol Citrus X 360Ml',
        price: 17.10,
        description: '6 en stock, listo para ser enviado',
        category: 'Ambientadores',
        image: 'https://amarket.com.bo/cdn/shop/files/7771214008825_670x670.jpg?v=1735844084',
      },
      {
        id: 5,
        title: 'Ambientador Bristar Aerosol Lavanda X 360Ml',
        price: 17.10,
        description: '¡Solo 4 disponibles!',
        category: 'Ambientadores',
        image: 'https://amarket.com.bo/cdn/shop/files/7771214008788_670x670.jpg?v=1735844084',
      },

      //CATEGORÍA PAPEL HIGIÉNICO
      {
        id: 6,
        title: 'Scott Papel Higiénico Extra Doble Hoja X 6 Unidades',
        price: 14.20,
        description: '47 en stock, listo para ser enviado',
        category: 'Papel Higiénico',
        image: 'https://amarket.com.bo/cdn/shop/files/351214_670x670.jpg?v=1712344734',
      },
      {
        id: 7,
        title: 'Nacional Selecto Papel Higienico Th 3D X 12 Unidades',
        price: 45.60,
        description: '17 en stock, listo para ser enviado - Unidad de venta: Paquete',
        category: 'Papel Higiénico',
        image: 'https://amarket.com.bo/cdn/shop/files/7776507001521_670x670.jpg?v=1712347243',
      },
      {
        id: 8,
        title: 'Nacional Selecto Papel Higienico Th 3D X 6 Unidades',
        price: 23.20,
        description: 'Disponibilidad: ¡Solo 3 disponibles! - Unidad de venta: Paquete',
        category: 'Papel Higiénico',
        image: 'https://amarket.com.bo/cdn/shop/files/7776507001538_670x670.jpg?v=1712346924',
      },
      {
        id: 9,
        title: 'Papel Higiénico Elite Ultra Suave Doble Hoja X 8 Rollos',
        price: 114.10,
        description: 'Disponibilidad: ¡Solo 4 disponibles! - Unidad de venta: Paquete',
        category: 'Papel Higiénico',
        image: 'https://amarket.com.bo/cdn/shop/files/7759185005234_670x670.jpg?v=1723828902',
      },
      {
        id: 10,
        title: 'Scott Papel Higienico Esencias Megarollo Dh X 12 Rollo',
        price: 70.80,
        description: 'Disponibilidad: 7 en stock, listo para ser enviado - Unidad de venta: Paquete',
        category: 'Papel Higiénico',
        image: 'https://amarket.com.bo/cdn/shop/files/7776501002418_670x670.jpg?v=1712344732',
      },

      //CATEGORÍA DETERGENTES
      {
        id: 11,
        title: 'Bolivar Detergente Limon X 2Kg',
        price: 66.90,
        description: 'Disponibilidad: ¡Solo 2 disponibles! - Unidad de venta: Bolsa',
        category: 'Detergentes',
        image: 'https://amarket.com.bo/cdn/shop/files/7750243059732_590x590.jpg?v=1712343950',
      },
      {
        id: 12,
        title: 'Limpia Pisos Todo Brillo 4 En 1 Campos De Lavanda X 1800Ml',
        price: 23.10,
        description: 'Disponibilidad: ¡Solo 2 disponibles! - Unidad de venta: Unidad',
        category: 'Detergentes',
        image: 'https://amarket.com.bo/cdn/shop/files/7774904404389_670x670.jpg?v=1736256236',
      },
      {
        id: 13,
        title: 'Limpia Pisos Todo Brillo 5 En 1 Mascotas X 900Ml',
        price: 14.70,
        description: 'Disponibilidad: ¡Solo 5 disponibles! - Unidad de venta: Unidad',
        category: 'Detergentes',
        image: 'https://amarket.com.bo/cdn/shop/files/7774904404662_670x670.jpg?v=1736256238',
      },
      {
        id: 14,
        title: 'Bolivar Detergente Suavizante X 700G',
        price: 29.50,
        description: 'Limpieza y cuidado en un solo detergente Disponibilidad: ¡Solo 5 disponibles! - Unidad de venta: Bolsa',
        category: 'Detergentes',
        image: 'https://amarket.com.bo/cdn/shop/files/7750243059657_590x590.jpg?v=1712344783',
      },
      {
        id: 15,
        title: 'Limpia Pisos Todo Brillo 4 En1 Floral X 900Ml',
        price: 14.70,
        description: 'Disponibilidad: ¡Solo 1 disponibles! - Unidad de venta: Unidad',
        category: 'Detergentes',
        image: 'https://amarket.com.bo/cdn/shop/files/7774904404686_670x670.jpg?v=1723828960',
      },

      //CATEGORÍA INSECTICIDAS
      {
        id: 16,
        title: 'Baygon Aerosol Verde X 300Ml',
        price: 40.10,
        description: 'Disponibilidad: 13 en stock, listo para ser enviado - Unidad de venta: Unidad',
        category: 'Insecticidas',
        image: 'https://amarket.com.bo/cdn/shop/files/7501032931131_670x670.jpg?v=1712345010',
      },
      {
        id: 17,
        title: 'Baygon Aerosol Mata Moscas Y Mosquitos X 300Ml',
        price: 40.50,
        description: 'Disponibilidad: 22 en stock, listo para ser enviado Unidad de venta: Unidad',
        category: 'Insecticidas',
        image: 'https://amarket.com.bo/cdn/shop/files/7501032921484_670x670.jpg?v=1712345013',
      },
      {
        id: 18,
        title: 'Sapolio Mata Todo Insectos X 360Ml',
        price: 30.50,
        description: 'Disponibilidad: ¡Solo 4 disponibles! - Unidad de venta: Unidad',
        category: 'Insecticidas',
        image: 'https://amarket.com.bo/cdn/shop/files/7751851020152_670x670.jpg?v=1712345167',
      },
      {
        id: 19,
        title: 'Sapolio Mata Mosca Y Zancudos X 360Ml',
        price: 30.20,
        description: 'Disponibilidad: 12 en stock, listo para ser enviado Unidad de venta: Unidad',
        category: 'Insecticidas',
        image: 'https://amarket.com.bo/cdn/shop/files/7751851006620_670x670.jpg?v=1712344854',
      },
      {
        id: 20,
        title: 'Sapolio Mata Cucarachas Y Hormigas X 360Ml',
        price: 30.20,
        description: 'Disponibilidad: ¡Solo 2 disponibles! - Unidad de venta: Unidad',
        category: 'Insecticidas',
        image: 'https://amarket.com.bo/cdn/shop/files/7751851006613_670x670.jpg?v=1712344485',
      },

      //CATEGORÍA SUAVIZANTES
      {
        id: 21,
        title: 'Ola Suavecito Original X 900Ml',
        price: 25.90,
        description: 'Disponibilidad: ¡Solo 4 disponibles! - Unidad de venta: Unidad',
        category: 'Suavizantes',
        image: 'https://amarket.com.bo/cdn/shop/files/7775000014656_670x670.jpg?v=1712344358',
      },
      {
        id: 22,
        title: 'Ola Suavecito Doypack Bebe Y Ropa Delicada X 900Ml',
        price: 25.90,
        description: 'Disponibilidad: 6 en stock, listo para ser enviado - Unidad de venta: Unidad',
        category: 'Suavizantes',
        image: 'https://amarket.com.bo/cdn/shop/files/7775000014663_670x670.jpg?v=1712344361',
      },
      {
        id: 23,
        title: 'Ola Suavecito Suavizante Y Acondicionador De Ropa Original X 1.7 L',
        price: 48.50,
        description: 'Disponibilidad: ¡Solo 4 disponibles! - Unidad de venta: Unidad',
        category: 'Suavizantes',
        image: 'https://amarket.com.bo/cdn/shop/files/7775000011907_670x670.jpg?v=1712344361',
      },
      {
        id: 24,
        title: 'Ola Suavecito Liquido Sensaciones Botella X 1.7 L',
        price: 48.50,
        description: 'Disponibilidad: ¡Solo 5 disponibles! Unidad de venta: Unidad',
        category: 'Suavizantes',
        image: 'https://amarket.com.bo/cdn/shop/files/7775000013499_670x670.jpg?v=1712344360',
      },
      {
        id: 25,
        title: 'Ola Suavecito Suavizante Bebé Y Ropa Delicada X 1.7 L',
        price: 48.50,
        description: 'Disponibilidad: ¡Solo 5 disponibles! - Unidad de venta: Unidad',
        category: 'Suavizantes',
        image: 'https://amarket.com.bo/cdn/shop/files/7775000011914_670x670.jpg?v=1712344371',
      },

      //CATEGORÍA JABONES
      {
        id: 26,
        title: 'Bolivar Jabon Limon X 190G',
        price: 9.90,
        description: 'Disponibilidad: 36 en stock, listo para ser enviado - Unidad de venta: Unidad',
        category: 'Jabones',
        image: 'https://amarket.com.bo/cdn/shop/files/7750243068840_670x670.jpg?v=1712346415',
      },
      {
        id: 27,
        title: 'Bolivar Jabon Baby Kids X 190G',
        price: 9.90,
        description: 'Disponibilidad: ¡Solo 2 disponibles! - Unidad de venta: Unidad',
        category: 'Jabones',
        image: 'https://amarket.com.bo/cdn/shop/files/7750243068888_670x670.jpg?v=1712346417',
      },
      {
        id: 28,
        title: 'Bolivar Jabon Floral X 190G',
        price: 9.90,
        description: 'Disponibilidad: ¡Solo 1 disponibles! - Unidad de venta: Unidad',
        category: 'Jabones',
        image: 'https://amarket.com.bo/cdn/shop/files/7750243068826_670x670.jpg?v=1712346417',
      },
      {
        id: 29,
        title: 'Uno Jabon Triple Accion Antibacterial X 200G',
        price: 8.20,
        description: 'Disponibilidad: ¡Solo 1 disponibles! - Unidad de venta: Unidad',
        category: 'Jabones',
        image: 'https://amarket.com.bo/cdn/shop/files/7750243074803_670x670.jpg?v=1712347254',
      },
      {
        id: 30,
        title: 'Jabón Cavallaro Coco Puro X 100G',
        price: 11.70,
        description: 'Disponibilidad: 6 en stock, listo para ser enviado - Unidad de venta: Unidad',
        category: 'Jabones',
        image: 'https://amarket.com.bo/cdn/shop/files/7840118212109_670x670.jpg?v=1721853131',
      },

      //CATEGORÍA DESINFECTANTES
      {
        id: 26,
        title: 'Archer Desinfectante Concentrado Germikill X 200G',
        price: 34.60,
        description: 'Disponibilidad: 6 en stock, listo para ser enviado - Unidad de venta: Frasco',
        category: 'Desinfectantes',
        image: 'https://amarket.com.bo/cdn/shop/files/07775005002054_670x670.jpg?v=1712343894',
      },
      {
        id: 27,
        title: 'Mr. Cloro Lavandina X 1 L',
        price: 11.50,
        description: 'Disponibilidad: 7 en stock, listo para ser enviado - Unidad de venta: Unidad',
        category: 'Desinfectantes',
        image: 'https://amarket.com.bo/cdn/shop/files/7779970700038_670x670.jpg?v=1712344277',
      },
      {
        id: 28,
        title: 'Mr. Cloro Lavandina X 2 L',
        price: 23.00,
        description: 'Disponibilidad: 18 en stock, listo para ser enviado - Unidad de venta: Unidad',
        category: 'Desinfectantes',
        image: 'https://amarket.com.bo/cdn/shop/files/7779970700052_670x670.jpg?v=1712344290',
      },
      {
        id: 29,
        title: 'Lavandina Sapolio X 1000Ml',
        price: 12.80,
        description: 'Disponibilidad: ¡Solo 5 disponibles! - Unidad de venta: Unidad',
        category: 'Desinfectantes',
        image: 'https://amarket.com.bo/cdn/shop/files/7750243073295_670x670.jpg?v=1716846086',
      },
      {
        id: 30,
        title: 'Lysoform Desinfectante Original X 360Cc',
        price: 38.40,
        description: 'Disponibilidad: ¡Solo 5 disponibles! - Unidad de venta: Unidad',
        category: 'Desinfectantes',
        image: 'https://amarket.com.bo/cdn/shop/files/7790520986788_293x293.jpg?v=1712344689',
      },

      //CATEGORÍA BOLSAS
      {
        id: 31,
        title: 'Ola Bolsas De Basura Negra Hasta 50 L 70X75cm X 10 Unidades',
        price: 13.50,
        description: 'Disponibilidad: ¡Solo 2 disponibles! - Unidad de venta: Paquete',
        category: 'Bolsas',
        image: 'https://amarket.com.bo/cdn/shop/files/7775000011648_670x670.jpg?v=1712344932',
      },
      {
        id: 32,
        title: 'Ola Bolsas Basureras X 10 Unidades 56X50cm X 25 L',
        price: 8.30,
        description: 'Disponibilidad: 7 en stock, listo para ser enviado - Unidad de venta: Paquete',
        category: 'Bolsas',
        image: 'https://amarket.com.bo/cdn/shop/files/7775000011624_670x670.jpg?v=1712344356',
      },
      {
        id: 33,
        title: 'Ola Bolsas Basureras 60X63cm X 35 L',
        price: 10.30,
        description: 'Disponibilidad: 10 en stock, listo para ser enviado - Unidad de venta: Paquete',
        category: 'Bolsas',
        image: 'https://amarket.com.bo/cdn/shop/files/7775000011631_670x670.jpg?v=1712344352',
      },
    ]

    setProducts(staticProducts)
  }, [])

  return (
    <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider
