import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import axios from 'axios';

function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRowId, setSelectedRowId] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            axios
                .get("http://localhost:3000/users")
                .then((res) => {
                    setUsers(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }, 2000);
    }, [users]);

    const handleEdit = (id) => {
        alert(`Edit user with ID: ${id}`);
    };

    const handleDelete = (id) => {
        axios.delete("http://localhost:3000/users/" + id)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        alert(`Delete user with ID: ${id}`);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'image',
            headerName: 'Profile',
            sortable: false,
            width: 60,
            renderCell: (params) => (
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
                    <Avatar alt="Profile Picture" src={params.value} sx={{ width: 25, height: 25 }} />
                </div>
            ),
        },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email Id', width: 250 },
        {
            field: 'number',
            headerName: 'Contact',
            type: 'text',
            width: 120,
        },
        {
            field: 'skills',
            headerName: 'Skills',
            sortable: false,
            width: 300,
            renderCell: (params) => (
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                        {params.value
                            .filter((skill) => skill && skill.trim() !== '')
                            .map((skill, index) => (
                                <Chip key={index} label={skill} size="small" color="primary" variant="outlined" />
                            ))}
                    </Stack>
                </div>
            ),
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            sortable: false,
            renderCell: (params) => {
                const isSelected = selectedRowId === params.row.id;
                return isSelected ? (
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', width: '100%', height: '100%' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => handleEdit(params.row.id)}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </Button>
                    </Box>
                ) : null;
            },
        },
    ];

    const paginationModel = { page: 0, pageSize: 10 };
    const rows = users;

    return (
        <>
            <Paper sx={{ height: '100%', width: '100%' }}>
                {loading ? (
                    <Box sx={{ padding: 2 }}>
                        <Skeleton variant="rectangular" height={56} sx={{ marginBottom: 2 }} />
                        {[...Array(10)].map((_, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: 1,
                                    padding: 1,
                                    gap: 2,
                                    borderBottom: '1px solid #eee',
                                }}
                            >
                                <Skeleton variant="text" width={50} />
                                <Skeleton variant="circular" width={30} height={30} />
                                <Skeleton variant="text" width={120} />
                                <Skeleton variant="text" width={200} />
                                <Skeleton variant="text" width={100} />
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    {[...Array(3)].map((__, i) => (
                                        <Skeleton key={i} variant="text" width={50} height={30} />
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        onRowSelectionModelChange={(selectedIds) => {
                            setSelectedRowId(selectedIds.length > 0 ? selectedIds[0] : null);
                        }}
                        sx={{ border: 0 }}
                    />
                )}
            </Paper>
        </>
    );
}

export default UsersList;
