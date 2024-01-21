'use client';
import { BaseCardsContainer } from '@/components/ui/BaseCardsContainer';
import { GridCards } from '@/components/ui/GridCards';
import { initialData } from '@/data/seed-data';
import { CreateExperienceButton } from '../components/CreateExperienceButton';
import { Modal } from '@/components/ui/Modal';
import { ExperienceCreationForm } from '../components/ExperienceCreationForm';
import { useState } from 'react';

export default function DashboardPage () {
  const [isActiveModal, setIsActiveModal] = useState(false);

  const changeActive = () => {
    setIsActiveModal(!isActiveModal);
  };

  return (
        <>
            <main className="mt-40">
                <BaseCardsContainer
                    title={'Bienvenido Sebastian Ramirez'}
                    description={'Explora tus experiencias o crea una nueva'}
                    actionComponent={<CreateExperienceButton actionFunction={changeActive}/>}
                    content={<GridCards data={initialData.experiences} />}
                />
            </main>
            <Modal active={isActiveModal} actionFunction={changeActive} >
                <ExperienceCreationForm />
            </Modal>

        </>
  );
}
