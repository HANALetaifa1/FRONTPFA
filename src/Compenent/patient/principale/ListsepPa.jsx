// import React from 'react'
// import "./homePatient.css"
// import { useState, useEffect } from 'react';
// import { createSearchParams, useNavigate } from 'react-router-dom'
// import { fetchSpecialite } from "../../../Services/SpecialiteServices";
// import {urlimage} from "../../../Axios/Api"

// // import {  fetchMedecin}  from '../../../Services/DoctorServices';
// // import img2 from '../../Home/Images/team-2.jpg';
// // import axios from 'axios';
// export default function ListsepPa() {
//   const navigate = useNavigate()

//     const[specialite, setSpecialite]=useState([])

//     const handleGoToSpeciality = (specialite) => {
//       navigate({
//         pathname: "/OurDoctor",
//         search: createSearchParams({
//           specialite: specialite
//         }).toString()
//       });
//     }

//     useEffect(()=>{
//       fetchSpecialite().then(res=>{
//         setSpecialite(res.data)
//         console.log(res.data)
//       })
//      .catch(error=>{
//       console.log(error)
//      })
//     },[])
//   return (
//  <div className="services" >
//         <h1 className="title">Notre Specialités</h1>
//         <p className="sub-title"> Les Specialités qui sont disponibles dans le site </p>
//         <div className="list-services">
//             {specialite.map((sep, index) => (
//               <div onClick={() => handleGoToSpeciality(sep.nomsep)} className="box" style={{cursor: 'pointer'}} key={index}>
//                 <div style={{ textAlign: 'center' }}>
//               <img src={urlimage +sep.Icon} alt={sep.Icon} style={{ maxWidth: '50%', height: 'auto' }} /> </div>
//  <br/>
//                 <h1>{sep.nomsep}</h1>
//                 <p>{sep.desc}</p>
//               </div>
//             ))}
//          </div>
//       </div> 




//   )

// }
import React, { useState, useEffect } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { fetchSpecialite } from '../../../Services/SpecialiteServices';
import { urlimage } from '../../../Axios/Api';
import './homePatient.css';

export default function ListsepPa() {
  const navigate = useNavigate();
  const [specialites, setSpecialites] = useState([]);

  useEffect(() => {
    fetchSpecialite()
      .then(res => {
        setSpecialites(res.data);
      })
      .catch(error => {
        console.log('Error fetching specialites:', error);
      });
  }, []);

  const handleGoToSpecialite = specialite => {
    navigate({
      pathname: '/OurDoctor',
      search: createSearchParams({
        specialite: specialite
      }).toString()
    });
  };

  return (
    <div className="services">
      <h1 className="title">Nos Spécialités</h1>
      <p className="sub-title">Les spécialités disponibles sur le site</p>
      <div className="list-services">
        {specialites.map((specialite, index) => (
          <div
            onClick={() => handleGoToSpecialite(specialite.nomsep)}
            className="box"
            style={{ cursor: 'pointer' }}
            key={index}
          >
            <div style={{ textAlign: 'center' }}>
              <img
                src={urlimage + specialite.Icon}
                alt={specialite.Icon}
                style={{ maxWidth: '50%', height: 'auto' }}
              />
            </div>
            <br />
            <h1>{specialite.nomsep}</h1>
            <p>{specialite.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
