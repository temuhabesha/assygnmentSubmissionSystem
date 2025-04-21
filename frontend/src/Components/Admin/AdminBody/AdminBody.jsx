import React from 'react'
import './AdminBody.css'

const AdminBody = () => {
  return (
    <div className="studentdashboardcomponent">
      <div className="studentdashboardtitle">
        <h1>
          Dashboard <span>...</span>
        </h1>
        <div className="righttitle">
          <h3>lecture Name:-Temu</h3>
          <div className="selectiontag">
            <select name="year" id="year">
              <option >filter by year</option>
              <option value="all">all</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
            </select>
            <select name="department" id="department">
              <option >filter by department</option>
              <option value="all">all</option>
              <option value="S/W">S/W</option>
              <option value="CS">CS</option>
              <option value="IT">IT</option>
              <option value="IS">IS</option>
            </select>
          </div>
        </div>
      </div>
      <div className="studentdashboardresult">
        <h2>Result</h2>
        <table>
          <tr>
            <th>cource</th>
            <th>lecture</th>
            <th>result</th>
            <th>date</th>
          </tr>
          <tr>
            <td>design</td>
            <td>Mola</td>
            <td>96 from 100</td>
            <td>15/08/2017</td>
          </tr>
          <tr>
            <td>design</td>
            <td>Mola</td>
            <td>96 from 100</td>
            <td>15/08/2017</td>
          </tr>
          <tr>
            <td>design</td>
            <td>Mola</td>
            <td>96 from 100</td>
            <td>15/08/2017</td>
          </tr>
          <tr>
            <td>design</td>
            <td>Mola</td>
            <td>96 from 100</td>
            <td>15/08/2017</td>
          </tr>
          <tr>
            <td>design</td>
            <td>Mola</td>
            <td>96 from 100</td>
            <td>15/08/2017</td>
          </tr>
        </table>
      </div>
      <div className="studentdashboardfeedback">
        <h2>Feedback</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          minus culpa atque aspernatur nihil facilis, consequatur a fugiat qui
          ducimus eligendi distinctio accusamus magni architecto ab porro sed
          dolorem corrupti! Eos aperiam aspernatur rem odio laborum autem in
          beatae quibusdam recusandae nisi quae magni numquam nulla nam optio,
          tempore non excepturi eaque error ex suscipit. Itaque, natus
          molestias. Autem, vero! Magnam laudantium numquam animi illo hic,
          error beatae impedit nulla nihil excepturi ut dicta cumque facilis
          labore quam rem necessitatibus optio nobis, voluptatem, dolores
          libero? Sed ea cumque saepe labore. Magnam ipsum blanditiis
          repudiandae voluptates fuga id quas aspernatur suscipit reprehenderit
          amet ex consequatur esse repellendus minima eius ad distinctio
          doloremque ducimus inventore odit, veniam dolor recusandae. Corrupti,
          odio rem. Dicta eaque deleniti libero, ex tempora doloribus quasi
          possimus, illo soluta tempore minima atque modi, voluptatibus
          reprehenderit adipisci corporis mollitia praesentium voluptas ducimus
          repellat maxime rerum odit! Quos, nihil deleniti.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dignissimos officiis a eum mollitia ipsum esse eligendi reprehenderit
          quibusdam! Tempore ipsam at, quibusdam veritatis nulla accusamus quas
          vel modi sed. Enim nisi vitae voluptatem culpa ex nam ullam magnam
          quisquam voluptatibus numquam architecto perspiciatis aliquam autem
          rerum, aut eius. Enim, nam amet unde tempora quasi quod reiciendis.
          Laboriosam, fuga. Voluptate. Blanditiis sequi, incidunt magni
          doloremque delectus vel corrupti sit, beatae aspernatur doloribus eos?
          Quas illum consectetur deserunt voluptas rem! Quibusdam, fuga eum
          neque rerum nemo atque sit sequi ipsum nihil. A neque quia odit nisi
          placeat non molestias cupiditate officia ducimus assumenda libero in
          delectus sint doloremque impedit vero, similique autem tempore enim
          aliquid repellendus sunt. Aliquid adipisci sapiente sequi. Accusantium
          aperiam, minus sunt debitis cum doloremque sit quas nemo assumenda
          cumque reiciendis nisi magnam animi quae distinctio nulla iure fugit
          eos ad eveniet odit nobis? Facilis tempore eligendi corporis!
        </p>
      </div>
    </div>
  );
}

export default AdminBody
