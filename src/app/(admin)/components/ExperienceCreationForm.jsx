'use client';
import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';

import { useForm } from '@/hooks/useForm';
import { useChecked } from '@/hooks/useChecked';
import { experienceCreationFormValidator } from '@/helpers/form-validation-experience-creation';
import { locations } from '@/data/dataLocations';
import { useImageUpload } from '@/hooks/useImageUpload';
import { useRouter } from 'next/navigation';

export const ExperienceCreationForm = () => {
  const router = useRouter();
  const [loadData, setLoadData] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [townSearch, setTownSearch] = useState(['']);
  const {
    formState,
    onInputChange
  } = useForm(
    {
      title: '',
      description: '',
      category: '',
      email: '',
      tel: '',
      whatsappNumber: '',
      country: '',
      department: '',
      town: '',
      address: '',
      facebookTag: '',
      instagramTag: '',
      twitterTag: ''
    }
  );

  const { checked, handleClickCheckbox } = useChecked({
    food: false,
    drinks: false,
    transport: false,
    equipment: false,
    tickets: false,
    sure: false
  });

  const { imageFiles, uploadedImageManager } = useImageUpload([]);

  const { title, description, category, email, tel, whatsappNumber, country, department, town, address, facebookTag, instagramTag, twitterTag } = formState;

  const { food, drinks, transport, equipment, tickets, sure } = checked;

  const uploadImages = async (file, token) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const resp = await fetch('http://localhost:3001/api/files/experience', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error + 'error al enviar imagen');
    }
  };

  const createExperience = async (event) => {
    event.preventDefault();

    const isValidForm = experienceCreationFormValidator(title, description, email, tel, whatsappNumber, country, department, town, address);
    setErrorMessages(isValidForm.errorMessages);

    if (!isValidForm.isValid) return;

    setLoadData(true);

    const token = getCookie('tourism-token');

    const imagePromises = [];

    for (let i = 0; i < imageFiles.length; i++) {
      imagePromises.push(uploadImages(imageFiles[i], token));
    }

    const urlImages = await Promise.all(imagePromises).then((values) => {
      return values.map(url => url.secureUrl);
    });

    await fetch('http://localhost:3001/api/experiences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        title,
        description,
        category,
        email,
        tel,
        whatsappNumber,
        country,
        department,
        town,
        address,
        facebookTag,
        instagramTag,
        twitterTag,
        food,
        drinks,
        transport,
        equipment,
        tickets,
        sure,
        images: urlImages
      })
    });
    router.refresh();
    localStorage.setItem('isModalActive', 'false');
    setLoadData(false);
  };

  useEffect(() => {
    const town = locations.find(
      (d) => d.departamento === department
    );
    if (!town) return;
    setTownSearch(town.ciudades);
  }, [department]);

  return (
    <form className=" form-experiencie overflow-y-scroll h-full py-10" onSubmit={createExperience} >
      {
        errorMessages.length !== 0 && errorMessages.map(error => {
          return (
            <ul key={error}>
              <li>{error}</li>
            </ul>
          );
        })
      }
      <div className=" p-10 ">
        <div className="border-b pb-12">
          <h2 className="text-2xl font-semibold  text-gray-900">
            Creación de la experiencia
          </h2>
          <p className="mt-1 text-xl  text-gray-600">
            Por favor ingrese todos los datos
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ">
            <div className="">
              <label
                htmlFor="experienceTitle"
                className="block text-2xl font-medium  text-gray-900"
              >
                Título de la experiencia
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={title}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="experienceTitle"
                className="block text-2xl font-medium  text-gray-900"
              >
                Descripción de la experiencia
              </label>
              <div className="mt-2">
                <textarea
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                  onChange={onInputChange}
                  value={description}
                >
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-full">
          <label
            htmlFor="category"
            className="block text-2xl font-medium  text-gray-900"
          >
            Categoría
          </label>
          <div className="mt-2">
            <select
              name="category"
              className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
              onChange={onInputChange}
              value={category}
            >
              <option>----</option>

              <option>tour en bicicleta</option>
              <option>senderismo</option>
              <option>parapente</option>
              <option>paseo a caballo</option>
              <option>vida nocturna</option>
              <option>motocross</option>
              <option>tejo</option>
              <option>otro</option>

            </select>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12 mb-5 ">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-full">
              <label
                htmlFor="email"
                className="block text-2xl font-medium  text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={email}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="tel"
                className="block text-2xl font-medium  text-gray-900"
              >
                Telefono
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="tel"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={tel}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="whatsappNumber"
                className="block text-2xl font-medium  text-gray-900"
              >
                Whatsapp
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="whatsappNumber"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={whatsappNumber}
                />
              </div>
            </div>
            <div className="sm:col-span-full">
              <label
                htmlFor="country"
                className="block text-2xl font-medium  text-gray-900"
              >
                Pais
              </label>
              <div className="mt-2">
                <select
                  name="country"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={country}
                >
                  <option>----</option>

                  <option>Colombia</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="department"
                className="block text-2xl font-medium  text-gray-900"
              >
                Departamento
              </label>
              <div className="mt-2">
                <select
                  name="department"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={department}
                >
                  <option>----</option>
                  {locations.map(({ id, departamento }) => {
                    return (
                      <option
                        key={id}
                        value={departamento}
                      >
                        {departamento}
                      </option>
                    );
                  })}

                </select>
              </div>
            </div>
            <div className="sm:col-span-full">
              <label
                htmlFor="town"
                className="block text-2xl font-medium  text-gray-900"
              >
                Ciudad
              </label>
              <div className="mt-2">
                <select
                  name="town"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={town}
                >
                  {townSearch &&
                    townSearch.map(
                      (town) => {
                        return (
                          <option
                            key={town}
                            value={town}
                          >
                            {town}
                          </option>
                        );
                      }
                    )}

                </select>
              </div>
            </div>

            <div className="sm:col-span-full">
              <label
                htmlFor="street-address"
                className="block text-2xl font-medium  text-gray-900"
              >
                Dirección
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={address}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="facebookTag"
                className="block text-2xl font-medium  text-gray-900"
              >
                Facebook
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="facebookTag"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={facebookTag}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-2xl font-medium  text-gray-900"
              >
                Instagram
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="instagramTag"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={instagramTag}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-2xl font-medium  text-gray-900"
              >
                Twitter
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="twitterTag"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={twitterTag}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold  text-gray-900">
            Que incluye la experiencia
          </h2>

          <div className="mt-10 space-y-10">
            <fieldset>
              <div className="grid grid-cols-fluid gap-4 ">
                <div className="relative flex gap-x-3 ">
                  <div className="flex h-6 items-center">
                    <input
                      id="food"
                      name="food"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={food}
                      onChange={handleClickCheckbox}

                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="food"
                      className="font-medium text-gray-900"
                    >
                      Comida
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="transport"
                      name="transport"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={transport}
                      onChange={handleClickCheckbox}
                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="transport"
                      className="font-medium text-gray-900"
                    >
                      Transporte
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="drinks"
                      name="drinks"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={drinks}
                      onChange={handleClickCheckbox}
                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="drinks"
                      className="font-medium text-gray-900"
                    >
                      Bebidas
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="equipment"
                      name="equipment"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={equipment}
                      onChange={handleClickCheckbox}
                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="equipment"
                      className="font-medium text-gray-900"
                    >
                      Equipo
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="tickets"
                      name="tickets"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={tickets}
                      onChange={handleClickCheckbox}
                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="tickets"
                      className="font-medium text-gray-900"
                    >
                      Entradas
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="sure"
                      name="sure"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={sure}
                      onChange={handleClickCheckbox}
                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="sure"
                      className="font-medium text-gray-900"
                    >
                      Seguro
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>

            <input type="file" onChange={uploadedImageManager} multiple />

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className={`absolute bottom-5 right-10 py-5 px-8 rounded-[40px] text-white text-2xl font-bold ${loadData ? 'bg-disabled' : 'bg-primary'}`}
          disabled={loadData}
        >
          Crear experiencia
        </button>
      </div>
    </form>
  );
};
