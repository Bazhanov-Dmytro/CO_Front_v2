import s from "../dashboard.module.scss";

function Row(props) {
  return (
    <tr
      onClick={(ev) => props.displayMenu(ev, props.cells[0].email)}
      style={props?.style}
    >
      {props.cells.map((cell) => {
        if (!cell.email) {
          return (
            <td>
              <div className={s.wraper}>
                <div className={s.menu}>
                  <ul>
                    {cell?.menu?.map((item) =>
                      item !== null ? (
                        <li onClick={item?.func}>{item?.name}</li>
                      ) : null
                    )}
                  </ul>
                </div>

                {cell.name}
              </div>
            </td>
          );
        }
        return null;
      })}
    </tr>
  );
}

export default Row;
