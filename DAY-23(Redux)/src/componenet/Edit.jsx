import React from 'react'

export default function Edit() {z
  return (
    <div>
      
      <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={user.name} onChange={handleChange} placeholder='Enter name' />
        <input type="text" name='cls' value={user.cls} onChange={handleChange} placeholder='Enter class' />
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </button>
        <button type="button" onClick={closeEdit}>Cancel</button>
      </form>
    </div>

    </div>
  )
}
