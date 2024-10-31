

const CommonTitle = ({subTitle, title}) => {
    return (
        <div className="text-center my-2 space-y-2">
            <h1 className="text-sm text-red-600">{subTitle}</h1>
            <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>
    );
};

export default CommonTitle;