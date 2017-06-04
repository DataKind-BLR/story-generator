import { remand_and_bail_responses } from "./remand_and_bail.js"

function legal_aid_council_appointed(state) {

/*
	var states = [{state : "Delhi", state_caps: "DELHI"}, {state : "Himachal Pradesh", state_caps: "HIMACHAL PRADESH"}, {state : "Karnataka", state_caps: "KARNATAKA"}, {state : "Punjab", state_caps: "PUNJAB"}, {state : "Mizoram", state_caps: "MIZORAM"}, {state : "Sikkim", state_caps: "SIKKIM"}, {state : "Tamil Nadu", state_caps: "TAMILNADU"}, {state : "Telangana", state_caps: "TELANGANA"}, {state : "Haryana", state_caps:"HARAYANA"}, {state : "West Bengal", state_caps: "WEST BENGAL"}, {state : "Kerala", state_caps: "KERALA"}, {state : "Odisha", state_caps: "ODISHA"}, {state : "Maharastra", state_caps: "MAHARASHTRA"}, {state : "Chandigarh"}, {state : "Pondicherry"}, {state : "Andrha Pradesh"}, {state : "Jharkhand"}, {state : "Assam"}, {state : "DAMAN & DIU"}, {state : "Madhya Pradesh"}, {state : "Bihar"}, {state : "Arunachal Pradesh"}, {state : "Meghalaya"}, {state : "Uttarakhand"}, {state : "Dadra & Nagar Haveli"}, {state : "Uttar Pradesh"}, {state : "Manipur"}, {state : "Maharashtra"}];

	states.map((state) => {
		state.figures = {
			"complied": [{
				"2016": 0
			}]
		};
		state.responded = 0;
		state.appointed = 0;
		remand_and_bail_responses.filter((res) => { return res['STATE'].trim() == state.state }).forEach((d, i, all) => {
			state.responded++;
			state.appointed += (d['LWYRS_APNTD_FOR_REMAND_COURTS'] && d['LWYRS_APNTD_FOR_REMAND_COURTS'].trim().toUpperCase() == 'YES' ? 1 : 0);
		});

		state['figures']['complied']['2016'] = Math.round((state.appointed / state.responded) * 100);
		return state;
	});

	console.log(remand_and_bail_responses.filter((res) => { return res['STATE'].trim() == "DELHI" }));

	return states;
*/

/*
	return [
						{
							"state": "Andhra Pradesh", 
							"figures": {
								"complied": [{"2016": 10}]
							}
						},
						{
							"state": "Uttarakhand",
							"figures": {
								"complied": [{"2016": 70}]
							}
      			}
				];
*/

	return [{"state": "Uttarakhand","figures": {"complied": [{"2016": 70}]}},{"state": "Madhya Pradesh","figures": {"complied": [{"2016": 54.54545455}]}},{"state": "Arunachal Pradesh","figures": {"complied": [{"2016": 0}]}},{"state": "Andhra Pradesh","figures": {"complied": [{"2016": 100}]}},{"state": "Bihar","figures": {"complied": [{"2016": 41.66666667}]}},{"state": "Daman & Diu","figures": {"complied": [{"2016": 0}]}},{"state": "Jharkhand","figures": {"complied": [{"2016": 57.14285714}]}},{"state": "Punjab","figures": {"complied": [{"2016": 70.58823529}]}},{"state": "Mizoram","figures": {"complied": [{"2016": 100}]}},{"state": "Kerala","figures": {"complied": [{"2016": 33.33333333}]}},{"state": "Jharkhnad","figures": {"complied": [{"2016": 100}]}},{"state": "West Bengal","figures": {"complied": [{"2016": 83.33333333}]}},{"state": "Uttar Pradesh","figures": {"complied": [{"2016": 0}]}},{"state": "Chandigarh","figures": {"complied": [{"2016": 0}]}},{"state": "Pondicherry","figures": {"complied": [{"2016": 100}]}},{"state": "Haryana","figures": {"complied": [{"2016": 90}]}},{"state": "Dadra & Nagar Haveli","figures": {"complied": [{"2016": 0}]}},{"state": "Odisha","figures": {"complied": [{"2016": 18.18181818}]}},{"state": "Maharashtra","figures": {"complied": [{"2016": 100}]}},{"state": "Sikkim","figures": {"complied": [{"2016": 100}]}},{"state": "Telangana","figures": {"complied": [{"2016": 66.66666667}]}},{"state": "Andhra Pradesh","figures": {"complied": [{"2016": 71.42857143}]}},{"state": "Karnataka","figures": {"complied": [{"2016": 76.19047619}]}},{"state": "Himachal Pradesh","figures": {"complied": [{"2016": 100}]}},{"state": "Delhi","figures": {"complied": [{"2016": 81.81818182}]}},{"state": "Assam","figures": {"complied": [{"2016": 50}]}},{"state": "Manipur","figures": {"complied": [{"2016": 0}]}},{"state": "Tamil Nadu","figures": {"complied": [{"2016": 100}]}},{"state": "Maharastra","figures": {"complied": [{"2016": 60}]}},{"state": "Meghalaya","figures": {"complied": [{"2016": 0}]}}]; 


}

/*
export let chri_data =  [{
  "sector": "Early, first access to legal aid", 
  "subIndicators": [{
      "stateFigures": [{
        "state": "Andhra Pradesh", 
        "figures": {
          "complied": [{"2016": legal_aid_council_appointed("ANDHRA PRADESH")}]
        }
      }], 
      "indicator": "What percentage of districts which responded to the RTI query appointed legal aid council for all magistrate courts", 
      "slugIndicator": "n_districts_legal_aid_appointed", 
      "unit": "INR (in Crores)"
  }], 
  "slugSector": "early_first_access_to_legal_aid"
}];
*/

export let chri_data =  [{
  "sector": "Early, first access to legal aid", 
  "subIndicators": [{
      "stateFigures": legal_aid_council_appointed(), 
      "indicator": "What percentage of districts which responded to the RTI query appointed legal aid council for all magistrate courts", 
      "slugIndicator": "n_districts_legal_aid_appointed", 
      "unit": "INR (in Crores)"
  }], 
  "slugSector": "early_first_access_to_legal_aid"
}];
