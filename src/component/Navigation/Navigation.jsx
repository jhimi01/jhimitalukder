import Toggle from "../Toggle";

const Navigation = () => {
    return (
        <div className="flex items-center justify-between py-5">
            <div><h2 className="font-mono text-2xl">Jhimi Talukder</h2></div>
            <div className="flex items-center justify-center">
            <img className="rounded-full h-12 w-12 object-cover" src="https://i.ibb.co/XC8YjLn/download.jpg" alt="mypicture" />
                <Toggle></Toggle>
            </div>
        </div>
    );
};

export default Navigation;