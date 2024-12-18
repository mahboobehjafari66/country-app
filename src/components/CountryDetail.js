import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CountryDetail = () => {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error('Error fetching country detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetail();
  }, [cca3]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!country) {
    return <h2>Country not found</h2>;
  }

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ maxWidth: '400px', width: '100%' }}> 
        <CardContent style={{ textAlign: 'center' }}>
          <Typography variant="h5">{country.name.common}</Typography>
          
          <Typography variant="body1">Capital: {country.capital ? country.capital[0] : 'N/A'}</Typography>
          <Typography variant="body1">Region: {country.region}</Typography>
          <Typography variant="body1">Subregion: {country.subregion}</Typography>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={{ width: '40%', height: 'auto',  marginBottom: '10px' }}
          />
        </CardContent>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <Button variant="contained" color="primary" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CountryDetail;