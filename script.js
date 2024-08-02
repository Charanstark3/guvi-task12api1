document.addEventListener('DOMContentLoaded', () => {
    const countriesContainer = document.getElementById('countries');

    function fetchCountriesData() {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                displayCountries(data);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
                countriesContainer.innerHTML = '<p class="text-danger">Failed to load country data.</p>';
            });
    }

    function displayCountries(countries) {
        countriesContainer.innerHTML = countries.map(country => createCountryCard(country)).join('');
    }

    function createCountryCard(country) {
        return `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${country.flags.png}" alt="Flag of ${country.name.common}" class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title">${country.name.common}</h2>
                        <p class="card-text">Capital: ${country.capital}</p>
                        <p class="card-text">Region: ${country.region}</p>
                        <p class="card-text">Native Name: ${country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A'}</p>
                        <p class="card-text">Population: ${country.population.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        `;
    }

    fetchCountriesData();
});


