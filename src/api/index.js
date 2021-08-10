/* eslint-disable consistent-return */
import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw,ne)=>{
    try{
        const {data: {data}} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat ,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-key': '09cfa80fdfmshfab9bb2e6524034p10409ejsn8327b13fb216',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;

    } catch (error){
        console.log(error)

    }
}









