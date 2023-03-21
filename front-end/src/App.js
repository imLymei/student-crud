import './App.css';
import Appbar from './components/Appbar';
import Student from './components/Student';

function App() {
	return (
		<main>
			<header>
				<Appbar></Appbar>
			</header>
			<Student />
			<div className='credits'>
				<h6 className='credit'>
					<a href='https://lymei.art' target='_blank' rel='noreferrer'>
						Felipe Cardoso
					</a>{' '}
					© 2023
				</h6>
			</div>
		</main>
	);
}

export default App;
