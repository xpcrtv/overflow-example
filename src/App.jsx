import { Layout } from 'antd';
import CardsList from './components/CardsList';

const { Header, Footer, Content } = Layout;

const generateItems = () => {
  return [...Array(10)].map((_, idx) => ({
    id: idx,
    title: `Название-${idx}`,
    description: `Lorem ipsum dolor sit amet,`,
  }));
};

function App() {
  const data = generateItems();
  return (
    <Layout>
      <Header style={{color: 'white'}}>Пример с overflow</Header>
      <Content style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
        <CardsList data={data} />
      </Content>
    </Layout>
  );
}

export default App;
