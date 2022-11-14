
fetch("../scripts/senate.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (senate) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let members of senate) {
      out += `
      <tr>
        <td><a href="${members.url}">${members.first_name} ${members.last_name}</a></td>
        <td>${members.party}</td>
        <td>${members.state}</td>
        <td>${members.seniority}</td>
        <td>${members.votes_with_party_pct}</td>
      </tr
      `;
    }
    placeholder.innerHTML = out;
  });
const states = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AS": "American Samoa",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FM": "Federated States Of Micronesia",
  "FL": "Florida",
  "GA": "Georgia",
  "GU": "Guam",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MH": "Marshall Islands",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "MP": "Northern Mariana Islands",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PW": "Palau",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VI": "Virgin Islands",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
};
    
function buildDropdown(states){
  const keyStates = Object.keys(states); //dentro del objeto solo nos quedamos con las claves que son las abreviaciones
  var selectmenu = document.getElementById('filterstates'); //nos traemos del html el elemento con id filterstates
  keyStates.forEach((key, index) => { //para cada key dentro de keyStates
    let stateOptions = document.createElement('option'); //creamos elementos option
    stateOptions.value = `${key}`;//el valor sera la key
    stateOptions.text =`${key}`;//el texto sera la key tambien
    selectmenu.appendChild(stateOptions);//añadimos elementos hijo de tipo option al select
  });
};
 
  const parties = {
  D: 'Democrat',
  R: 'Republican',
  ID: 'Independent'
}