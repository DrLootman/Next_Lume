import { HeaderTitleI } from "./headerTitle";

function HeaderTitle({ title }: HeaderTitleI): JSX.Element {
  return (
    <header className="header_title">
      <h1>
        {title}
      </h1>
    </header>
  );
}

export default HeaderTitle;
