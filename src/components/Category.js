import React from 'react'
import { useCategory } from '../hooks/useCategory';
/* import { Header } from './Header'
import { Header } from './Header' */
import "./AdmCategory.scss"

function CategoryPage({recovery}) {
    const {recovery} = useCategory();
    console.log(recovery)
    function backCategories(e) {
        e.preventDefault();
        window.location.href = "./allCategories";
      }

    return (
        <>
    {/*     <Header /> */}
        <div className = 'divCategories' >
            <h1>CATEGORY</h1>
            <button onClick={backCategories}>
                <img src="https://i.ibb.co/pvDKWpc/150519-1.png" alt="150519-1" border="0" />Back to categories list</button>
            <div className ="categories">
                <input className ="categoryName" type="text" value={recovery.name}>{/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}</input>
                <input className ="categoryImage"type ="text">{/* <img src="https://i.ibb.co/GQZQSWz/folder-2.png" alt="150519-1" border="0" /> */}</input>
                <input className ="description" type ="text"></input>
            </div>
            <div className='buttons'>
            <button onClick={(e)=>{e.preventDefault(); console.log(recovery);}}> Save </button>
            <button> Delete </button>
            </div>
       {/*  <Footer />   */}
        </div>
        </>
    )
}

export default CategoryPage
