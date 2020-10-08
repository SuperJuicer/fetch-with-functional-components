import React from 'react';
import { render } from '@testing-library/react';
import GitHubUser from './GitHubUser';

test('renders <GitHubUser />', () => {
    const gitHubUser = render(<GitHubUser />);
    expect(gitHubUser).toBeTruthy();
});

// Note: This app is meant to have only the most basic tests.
// Most functionality is not tested.