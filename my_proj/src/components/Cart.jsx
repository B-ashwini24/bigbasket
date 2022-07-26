import React from 'react'
import { useEffect,useState } from 'react'
import img1 from './pic.png'
import axios from 'axios'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Cart = () => {
    const [age, setAge] = React.useState('');
  

const [ismodelvisible,setIsmodelvisible]=useState(false)
  const [editdata,setEditdata]=useState({
    quantity:0,
  
})
const calcualateTotal=(data)=>{
    let totl=0
    console.log("data"+JSON.stringify(data))
      data.map((ele)=>{
          totl=totl+(parseInt(ele.quantity)*parseInt(ele.price));
      })
      console.log(totl)
      setTotal(totl)
      axios.put(`http://localhost:9001/customer/edittotal`,editdata).then(response=>{
        console.log("updated")
       
      }).catch(err=>{
        console.log(err)
      })
  
  }
  const deletedata=(id)=>{
    axios.delete(`http://localhost:9001/customer/delete/${id}`).then(response=>{
      alert("data deleted")
     
    }).catch(err=>{
      console.log(err)
    })
    
  }
  const click1=(item)=>{
    console.log("inside click1")
    setEditdata({
    
      quantity:item.quantity+1,
      _id:item._id
    })
   
  }
  const click2=(item)=>{
    setEditdata({
      
      quantity:item.quantity-1,
      _id:item._id
    })
    }
    const [data,setData]=useState([])
    useEffect(()=>{
     // console.log(count)
        axios.get(`http://localhost:9001/customer/getdata`).then(response=>{
            console.log(response.data)
            setData(response["data"].data)
            calcualateTotal(data)
    
        }
        ).catch(err=>{
            console.log(err)
        })
        
        
    },[data])
    useEffect(()=>{
      axios.put(`http://localhost:9001/customer/edit`,editdata).then(response=>{
        console.log("updated")
       
      }).catch(err=>{
        console.log(err)
      })
    },[editdata])
    const clickhandler=()=>{
      setIsmodelvisible(true)
    }
    const handlecancel=()=>{
      setIsmodelvisible(false)
    }
    const handleok=()=>{
        /*  axios.delete(`http://localhost:4000/customer/delete/${data._id}`).then(response=>{
        console.log("data deleted")
       
      }).catch(err=>{
        console.log(err)
      })*/
      alert(JSON.stringify(data))
    /*  axios.post("http://localhost:4000/history/",data).then(res=>{
          console.log("data added")
          alert("data Added")
        }).catch(err=>{
          console.log(err)
        })*/
       // navigate("/history")
    }
const [total,setTotal]=useState(0)
  return (
    <>
    
    <div style={{display:'flex',flexDirection:'row',justifyContent:"center",marginTop:'30px'}} >
    {
     data.map((ele)=>{

    
  return       <>
 <div>
   <Card sx={{ maxWidth: 220,border:'1px solid black' ,display:'flex',flexDirection:'row',marginLeft:'20px'}}>
     <CardActionArea>
       <CardMedia
         component="img"
         style={{borderColor:"red" ,height: '30%',
         width: '30%',
         objectFit: 'contain',justifyContent:'center'}}
        
         image={ele.url}
         alt={ele.prod_name}
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         {ele.prod_name}
         </Typography>
         <Typography variant="body2" color="red">
         Price: &#8377;{ele.price}
         </Typography>
         <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={()=>click1(ele)} >+</Button>
        <Button >{ele.quantity}</Button>
         <Button onClick={()=>click2(ele)}>-</Button>
      </ButtonGroup>
      <Button onClick={()=>deletedata(ele._id)}>Remove Item</Button>
       </CardContent>
       
     </CardActionArea>
   </Card>
  </div>
   </>
    
   })
 }
  
   </div>
   <div style={{height:'100px',width:'200px',border:'1px solid white',backgroundColor:'cyan',color:'black',marginLeft:'70%',marginTop:'20px',fontFamily:'serif'}}>
         Bill Amount:{total}&#8377;<br/>
         Delivery:20
        <Button>Proceed to pay</Button>
   </div>
  
   </>
  )
}

export default Cart