export const ReservationForm = () => {
    return (
        <form className="flex flex-col gap-2">
            <input className="p-4 outline-none border-b" type="text" placeholder="Nombre" />
            <input className="p-4 outline-none border-b" type="text" placeholder="E-mail" />
            <button className=" p-4 rounded bg-primary text-white text-xl font-bold cursor-pointer">Reservar</button>
        </form>
    );
};
