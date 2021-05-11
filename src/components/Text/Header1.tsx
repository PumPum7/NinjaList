export const Header1 = ({
    headerText,
}: {
    headerText: string;
}): JSX.Element => {
    return (
        <h1 className="pb-2 text-center text-gray-800 text-xl font-bold">
            {headerText}
        </h1>
    );
};
