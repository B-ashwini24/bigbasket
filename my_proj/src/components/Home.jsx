import React from 'react'
import { useEffect,useState } from 'react'
import img1 from './pic.png'
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { InputBase } from '@mui/material';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const Home = () => {
    const [data,setData]=useState([{
        prod_id:0,
        prod_name:"",
        category:"",
        quantity:0,
        url:"",
        price:0,totalprice:0

    }])
    const [state,setState] = useState({
      name:''
      
  })
    const images = [
      {
        label: '',
        imgPath:
          'https://www.icicibank.com/managed-assets/images/offer-zone/shopping/bigbasket-offer-d.jpg',
      },
      {
        label: '',
        imgPath:
          'https://i.ytimg.com/vi/nf06gJ4hg60/maxresdefault.jpg',
      },
      {
        label: '',
        imgPath:
          'https://offercdn.paytm.com/blog/2019/08/2400x800.jpg',
      },
      {
        label: '',
        imgPath:
          'https://th.bing.com/th/id/OIP.Cy7sBSVjO83O6F968OeZjwHaE7?pid=ImgDet&rs=1',
      },
    ];
  useEffect(()=>{
    
    axios.get(`http://localhost:9001/prod/getdata/?name=${state.name}`).then((res)=>{
      console.log(res["data"].data)
      setData(res["data"].data)
      

    }).catch((err)=>{
      console.log(err)
    })
},[state])

const handleChange=(e)=>{
  
  setState({...state,[e.target.name]:e.target.value})
}
const clickhandler=(item)=>{
  item.quantity=1
    axios.post("http://localhost:9001/customer/savedata",item).then(res=>{
      console.log("data added")
      alert("data Added")
    }).catch(err=>{
      console.log(err)
    })

}
const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
    <div>
      <input type="text" name='name' style={{width:'500px',height:'50px',backgroundColor:'beige',marginTop:'20px',borderRadius:'10px' ,marginRight:'200px'}} placeholder='Search products here..' value={state.name} onChange={handleChange}/>
   </div>
<div style={{height:'400px',display:'flex',flexDirection:'row',marginBottom:'10px'}}>
  
  <div> <img  style={{width:'400px'}} src="https://www.adgully.com/img/800/201808/bigbasket.jpg"/></div>
<Box sx={{ width:'100%',height:'70', flexGrow: 1 ,marginLeft:'50px',marginBottom:'10px'}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginBottom:'10px',
          height: 25,
          
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  alignItems: 'center',
                  justifyItems:'center',
                  overflow: 'hidden',
                  width: '700px',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
</div>
    <div style={{display:'flex',border:'1px solid blue',flexDirection:'row',flexWrap:'wrap',flexFlow:'wrap',justifyContent:"space-between"}} >
     {
      data.map((ele)=>{

     
   return       <>
    <Card sx={{ maxWidth: 220,border:'1px solid black',marginTop:'10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{borderColor:"red"}}
          height="200"
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
          <Button onClick={()=>clickhandler(ele)}>Add to cart</Button>
        </CardContent>
        
      </CardActionArea>
    </Card>
    
    </>
     
    })
  }
    </div>
    </>
  )
}

export default Home