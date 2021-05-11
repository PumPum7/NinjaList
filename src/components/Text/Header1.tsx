export const Header1 = ({
    headerText,
}: {
    headerText: string;
}): JSX.Element => {
    return (
        <h1 className="pb-2 text-center text-nord-2 dark:text-nord-5 text-xl font-bold">
            {headerText}
        </h1>
    );
};
