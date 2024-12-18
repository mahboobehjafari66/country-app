import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: '20px', }}>
      <h2>Country List</h2>
      <Grid container spacing={2} >
        {countries.map(country => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3}>
            <Card>
              <Link to={`/country/${country.cca3}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardContent style={{ textAlign: 'center',display:'flex', alignItems:'center',justifyContent:'space-between' }}>
                  <img
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    style={{ width: '30%', height: 80, marginBottom: '10px' }}
                  />
                  <Typography variant="h6">{country.name.common}</Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CountryList;