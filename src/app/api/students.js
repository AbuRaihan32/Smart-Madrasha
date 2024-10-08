import studentsData from '../../data/students.json';

export default function handler(req, res) {
  res.status(200).json(studentsData);
}
