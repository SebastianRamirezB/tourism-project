import { BaseCardsContainer } from '@/components/ui/BaseCardsContainer';
import { GridCards } from '@/components/ui/GridCards';
import { Modal } from '@/components/ui/Modal';
import { ExperienceCreationForm } from '../components/ExperienceCreationForm';
import { cookies } from 'next/headers';
async function getData () {
  const res = await fetch('http://localhost:3001/api/experiences?limit=20', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = res.json();

  return data;
}

export default async function DashboardPage () {
  const cookieStore = cookies();
  const loggedUser = cookieStore.get('tourism-user').value;

  const user = JSON.parse(loggedUser);
  const data = await getData();
  const dataUser = data.filter(item => item.user.id === user.id);

  return (
    <div>
      <main className="mt-40 relative">
        <BaseCardsContainer
          title={`Bienvenido ${user.name}`}
          description={'Explora tus experiencias o crea una nueva'}
          actionComponent= {
          <Modal textButton="crear experiencia">
            <ExperienceCreationForm />
          </Modal>
          }
           content={<GridCards isModifiable data={dataUser} />}
        />
      </main>

    </div>
  );
}
