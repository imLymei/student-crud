import React, { useEffect, useState } from 'react';

export function Student() {
	const [students, setStudents] = useState([]);

	const [name, setName] = useState('');
	const [address, setAddress] = useState('');

	function handleClick() {
		const student = { address: address, name: name };
		console.log(student);
		const addData = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(student),
		};
		fetch('http://localhost:8080/student/add', addData).then(() => console.log('New Student Added'));
		setStudents([...students, student]);
	}

	async function getAll() {
		const res = await fetch('http://localhost:8080/student/getAll');
		const response = await res.json();
		setStudents(response);
	}

	useEffect(() => {
		getAll();
	}, []);

	return (
		<div>
			<form>
				<input
					type='text'
					placeholder='Nome do Estudante'
					id='name'
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='País do Estudante'
					id='address'
					value={address}
					onChange={(e) => {
						setAddress(e.target.value);
					}}
				/>
				<button type='button' onClick={handleClick}>
					Adicionar
				</button>
			</form>
			<h2 style={{ textAlign: 'center', margin: '20px 0px' }}>Estudantes:</h2>
			<div className='student-list'>
				{students.map((student) => {
					return (
						<div className='student-card' key={student.id}>
							<h3>Nome: {student.name}</h3>
							<h4>País: {student.address}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Student;
