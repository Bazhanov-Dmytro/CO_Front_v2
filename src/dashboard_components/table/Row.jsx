import s from "../dashboard.module.scss";

function Row(props) {
  return (
    <tr style={props?.style}>
      {props.cells.map((cell) => {
        return (
          <td>
            <div className={s.wraper} onClick={(ev) => props.displayMenu(ev)}>
              <div className={s.menu}>
                <ul>
                  {cell?.menu?.map((item) => (
                    <li onClick={item?.func}>{item?.name}</li>
                  ))}
                </ul>
              </div>

              {cell.name}
            </div>
          </td>
        );
      })}
    </tr>
  );
}

export default Row;
