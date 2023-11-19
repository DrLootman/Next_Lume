function HeaderTitle({ title }: { title: string }): JSX.Element {
  return (
    <header className="header_title">
      <h1>
        {title}
      </h1>
    </header>
  );
}

export default HeaderTitle;
