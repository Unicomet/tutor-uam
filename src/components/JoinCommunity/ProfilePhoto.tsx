import React from "react";

const ProfilePhoto: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <label htmlFor="profile-photo" className="cursor-pointer">
        <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <input
            type="file"
            id="profile-photo"
            className="hidden"
            accept=".png,.jpg,.jpeg,.webp,image/png"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                // Handle file upload here
                console.log(file);
              }
            }}
          />
          <div className="text-gray-500 text-center">Agrega una foto</div>
        </div>
      </label>
    </div>
  );
};

export default ProfilePhoto;
