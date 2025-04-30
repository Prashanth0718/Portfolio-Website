import { useParams } from 'react-router-dom';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <Section>
      <SectionTitle title="Project Details" />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Project {id}
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Project details will be populated here based on the project ID: {id}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectDetail;