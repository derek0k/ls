import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <form>
        <div>
          <label htmlFor="country">국가명</label>
          <input type="text" id="country" name="country" placeholder="국가 입력" />
        </div>

        <div>
          <label htmlFor="goldMedals">금메달</label>
          <input type="number" id="goldMedals" name="goldMedals" placeholder="0" />
        </div>

        <div>
          <label htmlFor="silverMedals">은메달</label>
          <input type="number" id="silverMedals" name="silverMedals" placeholder="0" />
        </div>

        <div>
          <label htmlFor="bronzeMedals">동메달</label>
          <input type="number" id="bronzeMedals" name="bronzeMedals" placeholder="0" />
        </div>

        <div className="buttonBox">
          <button type="submit">국가 추가</button>
          <button type="submit">업데이트</button>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Brazil</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>
              <button>삭제</button>
            </td>
          </tr>
          <tr>
            <td>Brazil</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>
              <button>삭제</button>
            </td>
          </tr>
          <tr>
            <td>Brazil</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>
              <button>삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
