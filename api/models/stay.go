package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

// Stay represents the structure of model Stay
type Stay struct {
	ID        uint64    `gorm:"primary_key;auto_increment" json:"id"`
	Title     string    `gorm:"size:255;not null;unique" json:"title"`
	Host      User      `json:"host"`
	HostID    uint32    `sql:"type:int REFERENCES users(id)" json:"author_id"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP" json:"created_at"`
	UpdatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP" json:"updated_at"`
}

func (stay *Stay) SaveStay(db *gorm.DB) (*Stay, error) {
	// Creates the Stay based on the instance being called by
	err := db.Debug().Model(&Stay{}).Create(&stay).Error
	if err != nil {
		return &Stay{}, err
	}
	return stay, nil
}

func (stay *Stay) FindAllStays(db *gorm.DB) (*[]Stay, error) {
	stays := []Stay{}
	err := db.Debug().Model(&Stay{}).Find(&stays).Error
	if err != nil {
		return &[]Stay{}, err
	}
	if len(stays) > 0 {
		// You want to fetch the host of the stay
		for i, _ := range stays {
			// insert into the Host field of Stay
			err := db.Debug().Model(&Stay{}).Where("id = ?", stays[i].HostID).Take(&stays[i].Host).Error
			if err != nil {
				return &[]Stay{}, err
			}
		}
	}
	return &stays, nil
}

func (stay *Stay) FindStayById(db *gorm.DB, sid int) (*Stay, error) {
	err := db.Debug().Model(&Stay{}).Where("id = ?", sid).Take(&stay).Error
	if err != nil {
		return &Stay{}, err
	}
	// You must fetch the host
	if stay.ID != 0 {
		err = db.Debug().Model(&User{}).Where("id = ?", stay.HostID).Take(&stay.Host).Error
		if err != nil {
			return &Stay{}, nil
		}
	}
	return stay, err
}

func (stay *Stay) UpdateStay(db *gorm.DB, sid int) (*Stay, error) {
	// assign to the current db instance
	db = db.Debug().Model(&Stay{}).Where("id = ?", sid).Take(&Stay{}).UpdateColumns(
		map[string]interface{}{
			"title": stay.Title,
			"updated_at": time.Now()
		}
	)
	// Retrieve the stay from the updated database
	err := db.Debug().Model(&Stay{}).Where("id = ?", sid).Take(&stay).Error
	if err != nil {
		return &Stay{}, err
	}
	// if it exists you want to fetch the host as well
	if p.ID != 0 {
		err = db.Debug().Model(&User).Where("id = ?", stay.HostID).Take(&stay.Host).Error
		if err != nil {
			return &Stay{}, err
		}
	}
	return stay, nil
}

func (stay *Stay) DeleteStayById(db *gorm.DB, sid int) (int64, error) {
	// Update and reassign it back to database with the deleted data
	db = db.Debug().Model(&Stay{}).Where("id = ?", sid).Take(&Stay{}).Delete(&Stay{})

	if db.Error != nil {
		// distinguish the type of error
		if gorm.IsRecordNotFoundError(db.Error) {
			return 0, errors.New("Stay was not found")
		}
		return 0, db.Error
	}
	return db.RowsAffected, nil
}