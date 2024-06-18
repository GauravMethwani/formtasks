
import  { useState, useEffect } from 'react';
import { carData } from './Objects';
import { locationData } from './Objects';
import './App.css'

function App() {

  const [brand, setBrand] = useState('');
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');

  const [state, setState] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [tehsils, setTehsils] = useState([]);
  const [selectedTehsil, setSelectedTehsil] = useState('');

  useEffect(() => {
    if (brand) {
      setModels(carData[brand]);
      setSelectedModel(''); 
    } else {
      setModels([]);
    }
  }, [brand]);

  useEffect(() => {
    if (state) {
      setDistricts(Object.keys(locationData[state]));
      setSelectedDistrict(''); 
    } else {
      setDistricts([]);
    }
  }, [state]);

  useEffect(() => {
    if (selectedDistrict) {
      setTehsils(locationData[state][selectedDistrict]);
      setSelectedTehsil(''); 
    } else {
      setTehsils([]);
    }
  }, [selectedDistrict, state]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
       
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <select
              className="border border-gray-300 rounded p-2 w-full"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">Select Brand</option>
              {Object.keys(carData).map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            <select
              className="border border-gray-300 rounded p-2 w-full"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              disabled={!brand}
            >
              <option value="">Select Model</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="border border-gray-300 rounded p-2 w-full" />
            <input type="text" placeholder="Mobile Number" className="border border-gray-300 rounded p-2 w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select
              className="border border-gray-300 rounded p-2 w-full"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select State</option>
              {Object.keys(locationData).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <select
              className="border border-gray-300 rounded p-2 w-full"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              disabled={!state}
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select
              className="border border-gray-300 rounded p-2 w-full"
              value={selectedTehsil}
              onChange={(e) => setSelectedTehsil(e.target.value)}
              disabled={!selectedDistrict}
            >
              <option value="">Select Tehsil</option>
              {tehsils.map((tehsil) => (
                <option key={tehsil} value={tehsil}>
                  {tehsil}
                </option>
              ))}
            </select>
          </div>
         
          <button type="submit" className="w-full bg-green-600 text-white rounded p-2 font-bold">
            Get  Price
          </button>
        </form>
      </div>
    </div>
            )
}

export default App
