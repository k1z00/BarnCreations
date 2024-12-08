import { Provider } from 'react-redux';
import store from './index'
import SellApp from './SellApp';

const SellMain: React.FC = () => {
return (
    <Provider store={store}>
      <SellApp/>
    </Provider>
   
)
}

export default SellMain