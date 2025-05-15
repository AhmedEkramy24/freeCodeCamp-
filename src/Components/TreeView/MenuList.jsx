import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    <>
      <ul className="ps-4">
        {list && list.length
          ? list.map((item) => <MenuItem item={item} />)
          : null}
      </ul>
    </>
  );
}
