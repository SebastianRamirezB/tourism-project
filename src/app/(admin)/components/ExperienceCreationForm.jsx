import { useForm } from '@/hooks/useForm';

export const ExperienceCreationForm = () => {
  const {
    formState,
    onInputChange
  } = useForm(
    {
      experienceTitle: '',
      email: '',
      phone: '',
      whatsappNumber: '',
      country: '',
      town: '',
      address: '',
      facebook: '',
      instagram: '',
      twitter: ''
    }
  );

  const { experienceTitle, email, phone, whatsappNumber, country, town, address, facebook, instagram, twitter } = formState;

  return (
    <div className=" form-experiencie overflow-y-scroll h-full py-10" >
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
                  name="experienceTitle"
                  id="experienceTitle"
                  autoComplete="experienceTitle"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={experienceTitle}
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
                <textarea className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl" name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
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
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={email}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-2xl font-medium  text-gray-900"
              >
                Telefono
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={phone}
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
                  id="whatsappNumber"
                  autoComplete="family-name"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={whatsappNumber}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="country"
                className="block text-2xl font-medium  text-gray-900"
              >
                Departamento
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={country}
                >
                  <option>----</option>

                </select>
              </div>
            </div>
            <div className="sm:col-span-full">
              <label
                htmlFor="country"
                className="block text-2xl font-medium  text-gray-900"
              >
                Ciudad
              </label>
              <div className="mt-2">
                <select
                  id="municipalities"
                  name="municipalities"
                  autoComplete="municipalities"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={town}
                >

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
                  id="address"
                  autoComplete="address"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={address}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-2xl font-medium  text-gray-900"
              >
                Facebook
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="facebook"
                  id="facebook"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={facebook}
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
                  name="instagram"
                  id="instagram"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={instagram}
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
                  name="twitter"
                  id="twitter"
                  className="w-full rounded-[4px] border-2 border-[#B4B4B4] px-5 py-6 outline-primary text-xl"
                  onChange={onInputChange}
                  value={twitter}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold  text-gray-900">
            Que incluye la experiencia
          </h2>
          <p className="mt-1 text-xl  text-gray-600">
            Well always let you know about important changes, but
            you pick what else you want to hear about.
          </p>

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

                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="candidates"
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

                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="offers"
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

                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="offers"
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

                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="offers"
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

                    />
                  </div>
                  <div className="text-2xl ">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-900"
                    >
                      Seguro
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="absolute bottom-5 right-10 py-5 px-8 bg-primary rounded-[40px] text-white text-2xl font-bold"
          onClick={() => console.log('holaa')}

        >
          Crear experiencia
        </button>
      </div>
    </div>
  );
};
