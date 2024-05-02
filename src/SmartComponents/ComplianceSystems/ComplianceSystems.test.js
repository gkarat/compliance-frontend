import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestWrapper from '@/Utilities/TestWrapper';

import { useQuery } from '@apollo/client';
jest.mock('@apollo/client');

import ComplianceSystems from './ComplianceSystems.js';

describe('ComplianceSystems', () => {
  it('expect to render inventory table when policies are loaded', () => {
    useQuery.mockImplementation(() => ({
      loading: false,
      data: {
        profiles: {
          edges: [
            {
              node: { id: 1, name: 'RHEL', osMajorVersion: '7' },
            },
          ],
        },
      },
    }));

    render(
      <TestWrapper>
        <ComplianceSystems />
      </TestWrapper>
    );

    expect(screen.getByLabelText('Inventory Table')).toBeInTheDocument();
  });
});
