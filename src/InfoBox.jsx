import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox( { info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1666720825304-67db37d44908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGR1c3R5JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/photo-1588724352517-1bafaec88baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1661498430090-2be2cc7ac358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxyYWluJTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
    
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <div className='cardContainer'> 
            <Card sx={{ maxWidth: 345 }}>
           <CardMedia
             sx={{ height: 140 }}
              image= {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
             title="green iguana"
            />
            <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {info.city} {
                info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <LightModeIcon /> : <AcUnitIcon />  
              }
             </Typography>
             <Typography variant="body2" color= 'text.secondary' component={"span"}>
                <p>Tempreture = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The weather can be described as ${info.weather} and feels like = {info.feelslike}&deg;C</p>
                
              </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}