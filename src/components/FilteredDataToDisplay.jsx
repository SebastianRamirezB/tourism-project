'use client';
import { useEffect, useState } from 'react';
import { ComponentSelect } from './ComponentSelect';
import { SearchBar } from './SearchBar';
import { GridCards } from './ui/GridCards';
import { locations } from '@/data/dataLocations';
import { Pagination } from './Pagination';

const allTowns = [];

locations.forEach((departamento) => {
  const towns = departamento.ciudades;

  allTowns.push(...towns);
});

export const FilteredDataToDisplay = ({ data }) => {
  const [paginationData, setPaginationData] = useState(data.slice(0, 1));
  const [filteredData, setfilteredData] = useState(paginationData);

  const [categorySearch, setCategorySearch] = useState([]);
  const [townSearch, setTownSearch] = useState([]);

  const [searchParameter, setSearchParameter] = useState('');

  const onSearchChanges = (event) => {
    setSearchParameter(event.target.value);
  };

  const onPagination = (offset, limit) => {
    setPaginationData(data.slice(offset, limit));
  };

  useEffect(() => {
    setfilteredData(paginationData);
  }, [paginationData]);

  useEffect(() => {
    if (categorySearch !== '----') {
      const dataS = data.filter(experience => experience.category === categorySearch);
      setfilteredData(dataS);
    } else {
      setfilteredData(paginationData);
    }
  }, [categorySearch]);

  useEffect(() => {
    if (townSearch !== '----') {
      const dataS = data.filter(experience => experience.town === townSearch);
      setfilteredData(dataS);
    } else {
      setfilteredData(paginationData);
    }
  }, [townSearch]);

  useEffect(() => {
    if (searchParameter !== '') {
      const dataS = data.filter(experience => experience.title.toLowerCase().includes(searchParameter.toLowerCase()));
      setfilteredData(dataS);
    } else {
      setfilteredData(paginationData);
    }
  }, [searchParameter]);

  useEffect(() => {
    if (townSearch === '----' && categorySearch === '----' && searchParameter === '') {
      setfilteredData(paginationData);
    }
  }, [categorySearch, townSearch, searchParameter, paginationData]);

  return (
        <>
            <SearchBar state={searchParameter} actionFunction={onSearchChanges} />
            <div className="flex w-full gap-[30px]">
                <ComponentSelect title="Categorías" options={['tour en bicicleta', 'senderismo', 'parapente', 'paseo a caballo', 'vida nocturna', 'motocross', 'tejo', 'otro']} actionFunction={setCategorySearch} />
                <ComponentSelect title="Ciudad" options={allTowns} actionFunction={setTownSearch} />

            </div>
            <GridCards data={filteredData} />
            <Pagination actionFunction={onPagination} limitData={data.length} />

        </>

  );
};
