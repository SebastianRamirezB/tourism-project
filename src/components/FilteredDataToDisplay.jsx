'use client';
import { useEffect, useState } from 'react';
import { ComponentSelect } from './ComponentSelect';
import { SearchBar } from './SearchBar';
import { GridCards } from './ui/GridCards';
import { locations } from '@/data/dataLocations';

export const FilteredDataToDisplay = ({ data }) => {
  const [filteredData, setfilteredData] = useState(data);

  const [categorySearch, setCategorySearch] = useState([]);

  const [departmentSearch, setDepartmentSearch] = useState([]);
  const [townOptions, setOptions] = useState([]);
  const [townSearch, setTownSearch] = useState([]);

  const [searchParameter, setSearchParameter] = useState('');

  const onSearchChanges = (event) => {
    setSearchParameter(event.target.value);
  };

  const departaments = locations.map((location) => location.departamento);

  useEffect(() => {
    const town = locations.find(
      (d) => d.departamento === departmentSearch
    );
    if (!town) return;
    setOptions(town.ciudades);
  }, [departmentSearch]);

  useEffect(() => {
    const dataS = data.filter(experience => experience.category === categorySearch);
    setfilteredData(dataS);
  }, [categorySearch]);

  useEffect(() => {
    const dataS = data.filter(experience => experience.department === departmentSearch);
    setfilteredData(dataS);
  }, [departmentSearch]);

  useEffect(() => {
    const dataS = data.filter(experience => experience.town === townSearch);
    setfilteredData(dataS);
  }, [townSearch]);

  useEffect(() => {
    const dataS = data.filter(experience => experience.title.toLowerCase().includes(searchParameter.toLowerCase()));
    setfilteredData(dataS);
  }, [searchParameter]);

  useEffect(() => {
    if (townSearch === '----' && departmentSearch === '----' && categorySearch === '----' && searchParameter === '') setfilteredData(data);
  }, [filteredData]);

  return (
        <>
            <SearchBar state={searchParameter} actionFunction={onSearchChanges} />
            <div className="flex w-full gap-[30px]">
                <ComponentSelect title="categorias" options={['tour en bicicleta', 'senderismo', 'parapente', 'paseo a caballo', 'vida nocturna', 'motocross', 'tejo', 'otro']} actionFunction={setCategorySearch} />
                <ComponentSelect title="Departamento" options={departaments} actionFunction={setDepartmentSearch} />
                <ComponentSelect title="ciudad" options={townOptions} actionFunction={setTownSearch} />

            </div>
            <GridCards data={filteredData} />
        </>

  );
};
