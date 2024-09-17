import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spin } from 'antd';
import { getExams } from '../../../services/examService';  // Import the fetch service


const DashboardOverview = () => {
  const [loading, setLoading] = useState(true);
  const [examCount, setExamCount] = useState(0);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const exams = await getExams();
        setExamCount(exams.length);  // Assuming exams is an array
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch exams:', error);
        setLoading(false);
      }
    };

    fetchExams(); // Fetch data on component mount
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div className="dashboard-overview">
      <Row gutter={16}>
        {/* Total Exams */}
        <Col span={8}>
          <Card title="Total Exams" bordered={false}>
            {examCount}
          </Card>
        </Col>

        {/* Similar cards for Users, Questions, Submissions */}
        {/* Example for Users, using a getUserCount service */}
        {/* <Col span={8}>
          <Card title="Total Users" bordered={false}>
            {userCount}
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default DashboardOverview;
