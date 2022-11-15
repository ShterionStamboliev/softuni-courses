export async function loadData() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
    const students = await response.json();
 
    return students;
}